from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import (
    TextOperationStatusCodes,
)

import sys


def main(client, ocr_result):
    operation_location_remote = ocr_result.headers["Operation-Location"]
    operation_id = operation_location_remote.split("/")[-1]

    while True:
        get_printed_text_results = client.get_read_operation_result(
            operation_id)
        if get_printed_text_results.status not in ["NotStarted", "Running"]:
            break

    # Print the detected text, line by line
    if get_printed_text_results.status == TextOperationStatusCodes.succeeded:
        for text_result in get_printed_text_results.recognition_results:
            for line in text_result.lines:
                yield line.text

    else:
        print("OCR call failed")
        sys.exit(1)


if __name__ == "__main__":
    client = ComputerVisionClient(
        endpoint, CognitiveServicesCredentials(subscription_key)
    )
    main(client)

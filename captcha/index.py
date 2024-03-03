from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import base64
from PIL import Image
import cv2
import io
import numpy as np

def predict(image):
  processor = TrOCRProcessor.from_pretrained('microsoft/trocr-base-printed')
  model = VisionEncoderDecoderModel.from_pretrained('microsoft/trocr-base-printed')

  pixel_values = processor(images=image, return_tensors="pt").pixel_values

  generated_ids = model.generate(pixel_values)
  return processor.batch_decode(generated_ids, skip_special_tokens=True)[0]

# Take in base64 string and return cv image
def stringToRGB(base64_string):
  # https://stackoverflow.com/questions/16214190/how-to-convert-base64-string-to-image
  imgdata = base64.b64decode(str(base64_string))
  img = Image.open(io.BytesIO(imgdata))
  opencv_img= cv2.cvtColor(np.array(img), cv2.COLOR_BGR2RGB)
  return opencv_img 

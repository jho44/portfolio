from http.server import BaseHTTPRequestHandler
import json 
import sys
import re
 
sys.path.append('../captcha')
 
from index import predict, stringToRGB

class handler(BaseHTTPRequestHandler):
 
  def do_POST(self):
    content_len = int(self.headers.get('Content-Length'))
    post_body = self.rfile.read(content_len)
    b64_img = json.loads(post_body)['b64_img']

    res = predict(stringToRGB(b64_img[23:]))
    res = re.sub('[^a-zA-Z]', '', res)
    
    self.send_response(200)
    self.send_header("Content-type", "text/plain")
    self.end_headers()
    
    self.wfile.write(bytes(res, "utf-8"))
    return

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type','text/plain')
    self.end_headers()
    self.wfile.write('Hello, world!'.encode('utf-8'))
    return
#Select interpreter fixed the issue with importing here
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#Initializing app using FastAPI
app = FastAPI()

#Permitting frontend requests; also adding in CORS permissions
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Test route for running server
@app.get("/ping")
def ping():
    return {"message": "pong"}
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import init_db
from models import Rezept

app = FastAPI()

# CORS-Konfiguration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Erlaubt alle Ursprünge
    allow_credentials=True,
    allow_methods=["*"],  # Alle Methoden erlauben (GET, POST, DELETE)
    allow_headers=["*"],  # Alle Header erlauben
)

@app.get("/rezepte")
async def get_rezepte():
    return await Rezept.all()

@app.delete("/rezepte/{rezept_id}")
async def delete_rezept(rezept_id: int):
    await Rezept.filter(id=rezept_id).delete()
    return {"message": "Rezept gelöscht"}


#---------------------------------------------------------------------------------
# after changing the file, please use cmd and run these commands to update the API 

# git add main.py
# git commit -m "some text"
# git push
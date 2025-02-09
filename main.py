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
    rezepte = await Rezept.all()  # Alle Rezepte aus der Datenbank holen
    return rezepte


@app.post("/rezepte")
async def add_rezept(rezept: dict):
    new_rezept = await Rezept.create(
        name=rezept.get("name"),
        beschreibung=rezept.get("beschreibung"),
        category=rezept.get("category"),
        zutaten=rezept.get("zutaten"),
        extra_infos=rezept.get("extra_infos")
    )
    return new_rezept

@app.delete("/rezepte/{rezept_id}")
async def delete_rezept(rezept_id: int):
    await Rezept.filter(id=rezept_id).delete()
    return {"message": "Rezept gelöscht"}

#---------------------------------------------------------------------------------
# after changing the file, please use cmd and run these commands to update the API 

# git add main.py
# git commit -m "Port auf 8080 geändert"
# git push
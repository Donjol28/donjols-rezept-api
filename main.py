from fastapi import FastAPI
from db import init_db
from models import Rezept

app = FastAPI()

@app.on_event("startup")
async def startup():
    await init_db()

@app.get("/rezepte")
async def get_rezepte():
    return await Rezept.all()

@app.post("/rezepte")
async def add_rezept(rezept: dict):
    new_rezept = await Rezept.create(**rezept)
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
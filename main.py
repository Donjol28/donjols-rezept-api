from fastapi import FastAPI

app = FastAPI()

# Beispiel-Rezepte
rezepte = [
    {"id": 1, "name": "Spaghetti Carbonara", "zutaten": ["Pasta", "Eier", "Speck", "Parmesan"]},
    {"id": 2, "name": "Pizza Margherita", "zutaten": ["Teig", "Tomatensauce", "Mozzarella", "Basilikum"]}
]

# API-Routen
@app.get("/")
def home():
    return {"message": "Hi Nini. Ich liebe dich ganz doll."}

@app.get("/rezepte")
def get_rezepte():
    return rezepte

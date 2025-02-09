from tortoise import Tortoise

DATABASE_URL = "postgresql://postgres:qUZYzZilYAKTqFijayCVNkXhcgBGocjC@postgres.railway.internal:5432/railway"  # Deine Railway-DB-URL hier einfügen

async def init_db():
    await Tortoise.init(
        db_url=DATABASE_URL,
        modules={"models": ["models"]}  # "models" ist der Ordner mit unseren Tabellen
    )
    await Tortoise.generate_schemas()

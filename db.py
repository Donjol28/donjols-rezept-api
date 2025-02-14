from tortoise import Tortoise

DATABASE_URL = "postgres://postgres:wcGppSVoJsPnYSAMQgnmdXlRusNLQxAL@postgres.railway.internal:5432/railway"

async def init_db():
    await Tortoise.init(
        db_url=DATABASE_URL,
        modules={"models": ["models"]}  # "models" ist der Ordner mit unseren Tabellen
    )
    await Tortoise.generate_schemas()

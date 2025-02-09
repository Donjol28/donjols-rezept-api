from tortoise import fields
from tortoise.models import Model

class Rezept(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=255)
    beschreibung = fields.TextField(null=True)
    category = fields.CharField(max_length=100, null=True)  # Kategoriefeld
    zutaten = fields.TextField(null=True)  # Zutatenfeld
    extra_infos = fields.TextField(null=True)  # Extra-Infos

    def __str__(self):
        return self.name
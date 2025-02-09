from tortoise.models import Model
from tortoise import fields

class Rezept(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=255)
    beschreibung = fields.TextField(null=True)

    def __str__(self):
        return self.name

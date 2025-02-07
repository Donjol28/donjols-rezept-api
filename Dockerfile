# Wähle das Python 3.9 Image
FROM python:3.9

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere die requirements.txt ins Container
COPY requirements.txt /app/

# Installiere alle Abhängigkeiten aus der requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Kopiere den restlichen Code ins Container
COPY . /app/

# Starte die App
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

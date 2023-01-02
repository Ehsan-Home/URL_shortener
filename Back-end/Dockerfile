# Backend docker file
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY . .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000

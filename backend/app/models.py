from sqlalchemy import Column, Integer, String, JSON
from app.database import Base


class Passport(Base):

    __tablename__ = "passports"

    id = Column(Integer, primary_key=True, index=True)

    passportId = Column(String, unique=True, index=True)

    modelName = Column(String)

    organization = Column(String)

    version = Column(String)

    issueDate = Column(String)

    trustScore = Column(Integer)

    risk = Column(String)

    status = Column(String)

    summary = Column(String)

    scores = Column(JSON)

    recommendations = Column(JSON)

    qr = Column(String)

    pdf = Column(String)
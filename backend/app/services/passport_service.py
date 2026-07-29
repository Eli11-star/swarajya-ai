import uuid

def create_passport(result):

    return {

        "passportId":

        f"AI-IND-{uuid.uuid4().hex[:8].upper()}",

        **result

    }
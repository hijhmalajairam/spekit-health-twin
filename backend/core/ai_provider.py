import json
from core.config import settings

def call_ai(prompt: str, groq_key: str = None, gemini_key: str = None) -> str:
    provider = settings.AI_PROVIDER.lower()

    if provider == "groq":
        from groq import Groq
        import os as _os
        # Use custom key if provided, else use global .env key
        active_key = groq_key if groq_key else settings.GROQ_API_KEY
        client = Groq(api_key=active_key)
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1000,
        )
        return completion.choices[0].message.content

    if provider == "gemini":
        from google import genai
        active_key = gemini_key if gemini_key else settings.GEMINI_API_KEY
        client = genai.Client(api_key=active_key)
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text

    elif provider == "anthropic":
        import anthropic
        client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=1000,
            messages=[{"role": "user", "content": prompt}]
        )
        return message.content[0].text

    elif provider == "ollama":
        import httpx
        response = httpx.post(
            f"{settings.OLLAMA_URL}/api/generate",
            json={"model": settings.OLLAMA_MODEL, "prompt": prompt, "stream": False},
            timeout=60
        )
        return response.json()["response"]

    else:
        raise ValueError(f"Unknown AI_PROVIDER: {provider}")
# Epigram

Epigram simplifies the way you stay informed. With AI, it delivers quick, clear summaries from reliable sources, so you get the news without the overwhelm. For more details, dive into deeper analysis or explore topics you care about — all in a feed tailored to your interests.

Our goal is to use AI to make quality news easy to access, understand, and personalize. We’re focused on connecting you with trusted sources while cutting through the noise, so you get the information that matters most.

## Features

- **Personalized News Feed**: Get a curated news feed based on your preferences and interests.
- **AI-powered Summaries**: Get concise news summaries and in-depth analysis.
- **Trusted Sources**: Access news from reputable sources worldwide.
- **User-friendly Interface**: Enjoy a sleek, intuitive interface designed for a seamless reading experience.
- **Responsive Design**: Access Epigram on any device, anywhere, anytime.
- **AI Deep dive**: Get in-depth analysis of news articles using AI.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Exa for AI-powered news summaries](https://exa.ai/)
- [Google Cloud Run](https://cloud.google.com/run?hl=en)
- [OpenAI `gpt-4o-mini` for AI-powered analysis](https://openai.com/)
- [Mediastack for news data](https://mediastack.com/documentation)
- [Upstash for caching and rate limiting](https://upstash.com/)

## Installation

To get started with Epigram, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/panda-sandeep/epigram
    ```

2. **Navigate to the project directory**:
    ```bash
    cd epigram
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    Copy `.env.example` to `.env.local` file in the root directory and add the following environment variables:
    
    ```env
    MEDIASTACK_API_KEY=your_mediastack_api_key
    EXA_API_KEY=your_exa_api_key
    OPENAI_API_KEY=your_openai_api_key
    BASE_URL=http://localhost:3000
    UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
    PER_TOPIC_NEWS_LIMIT=5
    NEXT_PUBLIC_GA_ID=your_google_analytics_id
    EPIGRAM_SECRET_HEADER_NAME=X-Epigram-Secret
    EPIGRAM_CRON_SECRET=your_cron_secret
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```
6. **Populate news**:
   Run the following in your terminal to populate news. On production, this should ideally run periodically via a cron.
    ```bash
    curl --header "X-Epigram-Secret: <your-secret>" http://localhost:3000/api/news/populate
    ```    

7. **Open your browser**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy Epigram, follow these steps:

1. **Install dependencies**:
    ```bash
    npm install
    ```

1. **Build the project**:
    ```bash
    npm run build
    ```

2. **Run the project**:
    ```bash
    npm start
    ```
You can deploy Epigram to any cloud provider that supports Next.js, such as Vercel, Netlify, or Google Cloud Run.
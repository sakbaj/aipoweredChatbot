# QuickBot AI

QuickBot AI is a modern, responsive AI chatbot application powered by the Google Gemini API (gemini-2.5-flash). It features a sleek glassmorphism UI built with Tailwind CSS, supporting dark/light modes, voice input, and markdown rendering.

## Features

- **Google Gemini Integration**: Fast and intelligent responses using the `gemini-2.5-flash` model.
- **Modern UI/UX**: Beautiful glassmorphism design with Tailwind CSS.
- **Dark/Light Theme**: Fully supports system preference and manual theme toggling.
- **Voice Input**: Built-in speech-to-text capabilities using the Web Speech API.
- **Markdown Support**: Renders AI responses with markdown formatting and syntax highlighting.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Chat History**: Maintains conversation context during the session.
- **Copy to Clipboard**: Easily copy AI responses with a single click.

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS (via CDN)
- **Backend**: Node.js, Express.js
- **API**: Google Gemini API
- **Libraries**:
  - `marked.js` (Markdown parsing)
  - `lucide` (Icons)
  - `dotenv` (Environment variable management)
  - `node-fetch` (API requests)

## Prerequisites

- Node.js (v14 or higher)
- A Google Gemini API Key

## Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd aipoweredChatbot-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   PORT=3000
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`

## Usage

- **Text Input**: Type your question in the input box and hit send.
- **Voice Input**: Click the microphone icon to speak your prompt (requires microphone permissions).
- **Theme**: Click the sun/moon icon in the header to toggle between light and dark modes.
- **Clear Chat**: Click the trash bin icon to reset the conversation.
- **Copy Response**: Hover over any AI response and click the copy icon at the bottom right.

## License

MIT License

import React from "react";
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">

        {/* YouTube RAG Chatbot */}
        <div className="project">
          <a
            href="https://github.com/SanjeevMakesh24/nlp_youtube"
            target="_blank"
            rel="noreferrer"
            
          >
            <img src={`${process.env.PUBLIC_URL}/youtube_project.png`} alt="YouTube RAG Chatbot" width="100%" />
            <h2>🤖 YouTube RAG Chatbot</h2>
          </a>
          <p>
            An AI-powered web app that summarizes and answers questions from YouTube videos
            using Retrieval-Augmented Generation (RAG).
          </p>
          <ul>
            <li>Transcript Extraction using <code>youtube_transcript_api</code> with proxy rotation.</li>
            <li>Chunking & Embedding with LangChain’s <code>RecursiveCharacterTextSplitter</code>.</li>
            <li>FAISS-based retrieval for fast semantic search.</li>
            <li>LLM Q&A powered by LangChain and OpenAI GPT.</li>
          </ul>
          <p><strong>Tech Stack:</strong> LangChain · Hugging Face · FAISS · Python · Streamlit · YouTubeTranscriptAPI</p>
          <a href="https://github.com/SanjeevMakesh24/nlp_youtube" target="_blank" rel="noreferrer">🔗 View Project</a>
        </div>

        {/* BYOVR */}
        <div className="project">
          <a
            href="https://github.com/Nrityya/BYOVR"
            target="_blank"
            rel="noreferrer"
          >
            <img src={`${process.env.PUBLIC_URL}/BYOVR.png`} alt="BYOVR House Party" width="100%" />
            <h2>🕹️ BYOVR: Multiplayer VR House Party</h2>
          </a>
          <p>
            A cross-platform multiplayer VR experience built in Unity, allowing users
            to interact in a shared virtual environment with custom avatars, voice chat,
            and real-time networking.
          </p>
          <ul>
            <li>Multiplayer networking using Photon Fusion & Unity Relay.</li>
            <li>Voice chat integration for real-time communication.</li>
            <li>Custom avatars rigged in Blender.</li>
            <li>Optimized for Android (Google Cardboard).</li>
            <li>Built with C# scripting, Unity animations, and network sync.</li>
          </ul>
          <p><strong>Tech Stack:</strong> Unity · C# · Photon Fusion · Blender · Unity Relay</p>
          <a href="https://github.com/Nrityya/BYOVR" target="_blank" rel="noreferrer">🔗 View Project</a>
        </div>

        {/* LivingLink */}
        <div className="project">
          <a
            href="https://github.com/aratiboppe/RoommateFinder"
            target="_blank"
            rel="noreferrer"
          >
            <img src={`${process.env.PUBLIC_URL}/LivingLink.png`} alt="LivingLink Roommate Finder" width="100%" />
            <h2>🏠 LivingLink: Roommate Finder App</h2>
          </a>
          <p>
            A full-stack mobile app designed to help users find compatible roommates by
            matching preferences and lifestyles.
          </p>
          <ul>
            <li>User profile creation with lifestyle preferences and interests.</li>
            <li>Roommate matching based on compatibility factors.</li>
            <li>Secure messaging between matched users.</li>
            <li>Cross-platform support using Expo Go for Android & iOS.</li>
            <li>RESTful API backend for managing authentication and data flow.</li>
          </ul>
          <p><strong>Tech Stack:</strong> React Native · Node.js · Express.js · MySQL · Expo</p>
          <a href="https://github.com/aratiboppe/RoommateFinder" target="_blank" rel="noreferrer">🔗 View Project</a>
        </div>

      </div>
    </div>
  );
}

export default Project;

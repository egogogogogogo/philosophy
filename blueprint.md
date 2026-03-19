# **Project Blueprint: 철학인의 방 (Philosopher's Room)**

## **Overview**
'철학인의 방' is a high-end, AI-powered web application that allows users to engage in deep philosophical dialogues with history's greatest thinkers. The app features a refined, premium aesthetic using modern web standards (Web Components, CSS Container Queries, Cascade Layers) and provides a structured, three-step journey from selecting a philosopher to having a themed conversation.

## **Core Features & Design**
*   **Three-Page Transition Flow:**
    *   **Step 1 (Gallery):** A visually stunning selection screen featuring 18 historical philosophers with portraits and iconic quotes.
    *   **Step 2 (Introduction & Topic Selection):** A dedicated page providing deep insights into the chosen philosopher, including basic info, main thoughts, history, and characteristics. It presents exactly 5 action buttons: 4 randomized topics and 1 "Free Talk" option.
    *   **Step 3 (Dialogue):** An immersive chat environment mimicking the philosopher's unique persona, style, and arguments. Includes utility buttons for navigation and saving the conversation.
*   **Aesthetics:** Premium "dark mode" by default with a parchment-like texture, gold accents, and expressive typography (Cinzel, Noto Serif KR). High-depth visual effects and interactive glow.
*   **Dialogue Export:** Users can download their conversations as a formatted TXT file with clear speaker labels ("나: ", "철학인: ").
*   **Multi-Language Support (i18n):** Supports 21 global languages including English, Korean, Japanese, Chinese (Simplified/Traditional), Spanish, French, German, Italian, Portuguese, Russian, Arabic, Hindi, Turkish, Polish, Dutch, Swedish, Thai, Vietnamese, Indonesian, and Czech.

## **Current Task: Implementing 21-Language Multi-Language Support (i18n)**

### **Plan & Steps**
1.  **Update UI (index.html):** Expand the language selector dropdown with all 21 languages in their native names.
2.  **Expand I18N Object (main.js):** Add UI string translations for all 21 languages.
3.  **Localize Philosopher Names (main.js):** Update `PHILS_DATA` to include the `name` field in all 21 languages for each philosopher.
4.  **Content Fallback Logic:** Refine the translation logic to fall back to English if specific content (e.g., description, history) is not available in the target language.
5.  **Simulated Response Localization:** Ensure the simulated AI responses in `callAPI()` reflect the selected language.

## **Implementation Details**
*   **State Management:** Use a simple variable-based state to track the current screen and philosopher.
*   **Transitions:** Use CSS opacity and transform transitions for smooth screen switching.
*   **Export Format:**
    ```text
    --- [철학인의 이름]과의 대화 ---
    나 : 안녕하세요.
    철학인 : 반갑소, 젊은이.
    --------------------------
    ```

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
*   **AdSense Optimization:**
    *   Semantic HTML5 structure.
    *   Clear and intuitive navigation.
    *   Dedicated sections for legal notices (Privacy, Terms).
    *   Fast-loading, framework-less implementation.
    *   Mobile-responsive design.

## **Current Task: Implementing the Multi-Page Flow & Content Expansion**

### **Plan & Steps**
1.  **Data Expansion:** Update `PHILS_DATA` in `main.js` to include richer information for each philosopher (History, Characteristics) to fulfill the Step 2 requirements.
2.  **Step 2 Logic Update:** Refactor `buildDetail()` to:
    *   Display the new "History" and "Characteristics" sections.
    *   Implement the "4 Random Topics + 1 Free Talk" button logic.
3.  **Step 3 Logic Update:**
    *   Ensure the top bar buttons are correctly placed and styled.
    *   Refine `saveChatLog()` to use the specific "나: ~", "철학인: ~" format.
4.  **AdSense Optimization:**
    *   Improve semantic structure in `index.html`.
    *   Enhance "About", "Privacy", and "Terms" modal content with more realistic text.
    *   Ensure all images have proper `alt` tags and descriptions.
5.  **Visual Polish:** Enhance transitions between screens to feel like "page transitions" as requested.

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

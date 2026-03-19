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
*   **Multi-Language Support (i18n):** Supports 21 global languages.
*   **CDN/Caching Policy:** Updated `firebase.json` with `Cache-Control: no-cache` for HTML, JS, and CSS files to ensure Cloudflare and browsers revalidate and reflect updates immediately after deployment.

## **Current Task: Resolving Cloudflare Update Issues**

### **Plan & Steps**
1.  **Analyze Cause:** Identified Cloudflare's edge caching as the reason updates aren't reflected.
2.  **Apply Solution:** Updated `firebase.json` to include `headers` with `Cache-Control: no-cache` for all critical static files (`.html`, `.js`, `.css`).
3.  **Redeploy & Verify:** Perform a new deployment to apply these headers and ensure Cloudflare revalidates correctly.

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

import geminiModel from "../config/geminiAIConfig.js";

export const aiChatController = async (req, res) => {
    let { message, history } = req.body;

    if (!message) {
        res.status(400).json({
            success: false,
            error: 'Message is required',
            message: "User message cannot be empty"
        })
    }
    // console.log('message:', message)
    // console.log('history:', history)
    history.unshift({role: 'user', parts: [{ text: "" }] })
    
    try {
        const chat = geminiModel.startChat({
            history: history || [],     // Conversation memory
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        res.status(200).json({
            success: true,
            message: "AI successfully generated content",
            data: { reply: responseText }
        })

    } catch (error) {
        console.log('error:', error)
        res.status(500).json({
            success: false,
            error: error?.message || JSON.stringify(error),
            message: 'Internal server error!'
        })
    }
}
import Session from '../models/Session.js';

// Get public sessions (existing)
export const getPublicSessions = async (req, res) => {
    try {
        const sessions = await Session.find({ isPublished: true });
        console.log('Fetched sessions:', sessions); 
        res.json(sessions);
    } catch (err) {
        console.error('Error fetching sessions:', err);
        res.status(500).json({
            message: "Server Error"
        });
    }
};


// create new Session
export const newSession = async (req, res) => {
  try {
    const { title, tags, json_file_url, status } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    // Optional: Validate `status` manually
    const validStatus = ['draft', 'published'];
    if (!validStatus.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const session = new Session({
      title,
      tags,
      json_file_url,
      status, // This must be explicitly passed
    });

    await session.save();

    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};



// Create new session 
// export const newSession = async (req, res) => {
//     try {
//         const { title, tags, json_file_url } = req.body;
        
//         // Basic validation
//         if (!title) {
//             return res.status(400).json({ message: "Title is required" });
//         }

//         const newSession = new Session({
//             title,
//             tags: tags || [],
//             json_file_url: json_file_url || '',
//             isPublished: false,
//             user_id: req.user?.id // Assuming you have user auth
//         });

//         const savedSession = await newSession.save();
        
//         console.log('Created session:', savedSession);
//         res.status(201).json(savedSession);
        
//     } catch (err) {
//         console.error('Error creating session:', err);
//         res.status(500).json({
//             message: "Error creating session",
//             error: err.message
//         });
//     }
// };
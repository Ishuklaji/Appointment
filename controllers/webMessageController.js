import webmessageModel from "../models/webMessages.js";

// create message
export const createMessage = async (req, res) => {
  try {
    const { name, contact, message } = req.body;
    if (!name || !contact || !message) {
      res.status(402).send({
        success: false,
        message: "Please Provide all fileds",
      });
    }
    const webMessage = new webmessageModel({ name, contact, message });
    webMessage.save();
    res.status(201).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Web Message API",
      error,
    });
  }
};

// get ALL message
export const getAllMessage = async (req, res) => {
  try {
    const webMessages = await webmessageModel.find({});
    res.status(201).send({
      success: true,
      message: "All web messages",
      totalCount: webMessages.length,
      webMessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all Web Message API",
      error,
    });
  }
};

// delete message
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "Please provide message ID",
      });
    }
    // find message

    const webMessage = await webmessageModel.findByIdAndDelete(id);

    res.status(201).send({
      success: true,
      message: "Message has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete Web Message API",
      error,
    });
  }
};

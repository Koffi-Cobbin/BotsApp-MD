var BotsApp = /** @class */ (function () {
    function BotsApp(mimeType, type, isReply, body, isCmd, commandName, chat, chatId, fromMe, owner, logGroup, isGroup, isPm, sender, groupName, groupMembers, groupAdmins, groupId, isBotGroupAdmin, isSenderGroupAdmin, replyMessageId, replyMessage, replyParticipant, isImage, isReplyImage, imageCaption, isGIF, isReplyGIF, isSticker, isReplySticker, isReplyVideo, isReplyAudio, isVideo, isAudio, isReplyAnimatedSticker) {
        this.mimeType = mimeType;
        this.type = type;
        this.body = body;
        this.chat = chat;
        this.chatId = chatId; // If PM, then the person's JID. If group, then the group's JID.
        this.fromMe = fromMe;
        this.owner = owner;
        this.sender = sender; // The person who sent the message in the group.
        this.isReply = isReply;
        this.replyMessageId = replyMessageId;
        this.replyParticipant = replyParticipant;
        this.replyMessage = replyMessage;
        this.isGroup = isGroup;
        this.isPm = isPm;
        this.isImage = isImage;
        this.isReplyImage = isReplyImage;
        this.imageCaption = imageCaption;
        this.isBotGroupAdmin = isBotGroupAdmin;
        this.isGIF = isGIF;
        this.isReplyGIF = isReplyGIF;
        this.isSticker = isSticker;
        this.isReplySticker = isReplySticker;
        this.isReplyAnimatedSticker = isReplyAnimatedSticker;
        this.isVideo = isVideo;
        this.isReplyVideo = isReplyVideo;
        this.isAudio = isAudio;
        this.isReplyAudio = isReplyAudio;
        this.isSenderGroupAdmin = isSenderGroupAdmin;
        this.isCmd = isCmd;
        this.commandName = commandName;
        this.logGroup = logGroup;
        this.groupName = groupName;
        this.groupMembers = groupMembers;
        this.groupAdmins = groupAdmins;
        this.groupId = groupId;
    }
    return BotsApp;
}());
module.exports = BotsApp;

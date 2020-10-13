var purecloudConfig = {};
purecloudConfig.widget = {};
purecloudConfig.aws = {};

//CREATE CHAT CONFIG
purecloudConfig.widget.CREATE_URL = 'https://api.mypurecloud.com/api/v2/webchat/guest/conversations'

purecloudConfig.widget.PURECLOUD_ORG_ID = '947659c0-d25d-4f72-b07f-bf5181952f5b';
purecloudConfig.widget.PURECLOUD_DEPLOYMENT_ID = '7539c714-2e65-402d-aff2-37f8362dd67e';
purecloudConfig.widget.TARGET_ADRESS = 'Atlas';
purecloudConfig.widget.LANGUAGE = 'pt-BR';


//SEND MESSAGE CONFIG

purecloudConfig.widget.SEND_URL = 'https://api.mypurecloud.com/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages'


//SEND TYPING CONFIG
purecloudConfig.widget.SEND_TYPING_URL = 'https://api.mypurecloud.com/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing'

//FINALYZE CONFIG
purecloudConfig.widget.FINALYZE_URL = 'https://api.mypurecloud.com/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}'

//AWS CONFIG
purecloudConfig.aws.ACCESS_KEY_ID = ''
purecloudConfig.aws.SECRET_ACCESS_KEY = ''
purecloudConfig.aws.AWS_REGION = 'sa-east-1'
purecloudConfig.aws.S3_BUCKET = 'anexoschat'

module.exports = purecloudConfig;
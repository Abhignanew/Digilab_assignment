// types/brevo.d.ts
declare module '@getbrevo/brevo' {
  export class ApiClient {
    static instance: ApiClient;
    authentications: {
      'api-key': {
        apiKey: string;
      };
    };
  }

  export class TransactionalEmailsApi {
    constructor();
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail): Promise<{
      messageId: string;
    }>;
  }

  export class EmailCampaignsApi {
    constructor();
    createEmailCampaign(createEmailCampaign: CreateEmailCampaign): Promise<{
      id: string;
    }>;
  }

  export class SendSmtpEmail {
    constructor();
    subject: string;
    htmlContent: string;
    textContent?: string;
    sender: {
      name: string;
      email: string;
    };
    to: Array<{
      email: string;
      name?: string;
    }>;
    cc?: Array<{
      email: string;
      name?: string;
    }>;
    bcc?: Array<{
      email: string;
      name?: string;
    }>;
    replyTo?: {
      email: string;
      name?: string;
    };
    attachment?: Array<{
      content: string;
      name: string;
    }>;
    params?: Record<string, any>;
    templateId?: number;
    tags?: string[];
  }

  export class CreateEmailCampaign {
    constructor();
    name: string;
    subject: string;
    sender: {
      name: string;
      email: string;
    };
    htmlContent: string;
    textContent?: string;
    scheduledAt?: string;
    immediateFlag?: boolean;
    recipients?: {
      listIds?: number[];
      exclusionListIds?: number[];
    };
    attachmentUrl?: string;
    inlineImageActivation?: boolean;
    mirrorActive?: boolean;
    footer?: string;
    header?: string;
    utmCampaign?: string;
    params?: Record<string, any>;
    sendAtBestTime?: boolean;
    abTesting?: boolean;
    subjectA?: string;
    subjectB?: string;
    splitRule?: number;
    winnerCriteria?: string;
    winnerDelay?: number;
    ipWarmupEnable?: boolean;
    initialQuota?: number;
    increaseRate?: number;
  }
}
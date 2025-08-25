export interface PlatformData {
  month: string;
  website_users: number;
  website_interactions: number;
  
  facebook_followers: number;
  facebook_impressions: number;
  facebook_reach: number;
  facebook_interactions: number;

  instagram_followers: number;
  instagram_impressions: number;
  instagram_reach: number;
  instagram_interactions: number;

  youtube: number; // Represents followers
  line: number; // Represents followers
}

export interface SocialAdData {
  id: number;
  campaignName: string;
  startDate: string; // 'YYYY-MM-DD'
  endDate: string; // 'YYYY-MM-DD'
  reach: number;
  clicks: number;
  landingPageVisits: number;
  conversions: number;
  cost: number;
}

export interface VideoData {
  id: number;
  date: string;
  title: string;
  department: string;
  doctor: string;
  views: number;
  likes: number;
}

export interface ShortVideoData {
  id: number;
  date: string;
  title: string;
  department: string;
  doctor: string;
  shorts_views: number;
  shorts_likes: number;
  reels_views: number;
  reels_likes: number;
  reels_shares: number;
}

export interface MedicalEventDataSource {
  name: string;
  percentage: number;
}

export interface MedicalEventAudience {
    name: string;
    percentage: number;
}

export interface MedicalEventData {
  id: number;
  date: string;
  theme: string;
  speaker: string;
  registered: number;
  attended: number;
  sources: MedicalEventDataSource[];
  audience: MedicalEventAudience[];
}


export interface PressReleaseData {
  id: number;
  author: string;
  date: string;
  department: string;
  doctor: string;
  topic: string;
  mediaCount: number;
}

export interface DateRange {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}
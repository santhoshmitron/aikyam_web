export type LocalizedFields = Record<string, string>;

export type DarshanWindow = {
  open?: string;
  close?: string;
};

export type TempleProfile = {
  id: string;
  templeId: string;
  username?: string;
  names?: LocalizedFields;
  history?: LocalizedFields;
  establishment?: {
    year?: number;
    foundedBy?: string;
  };
  timings?: {
    darshan?: {
      morning?: DarshanWindow;
      evening?: DarshanWindow;
    };
  };
  website?: {
    official?: string;
    donation?: string;
  };
  helplines?: Array<{
    type?: string;
    phone?: string;
    language?: string[];
  }>;
  email?: string;
  address?: {
    area?: string;
    city?: string;
    district?: string;
    stateCode?: string;
    countryCode?: string;
    pincode?: string;
  };
  deities?: Array<{
    deityId?: string;
    role?: string;
  }>;
  verified?: boolean;
  assets?: {
    avatar?: {
      variants?: Record<string, string>;
    };
    banner?: {
      variants?: Record<string, string>;
    };
  };
  isFollowing?: boolean;
  postsCount?: number;
  followersCount?: number;
  postsViewCount?: number;
  lastUpdatedAt?: string;
  placeId?: string;
  /** Human-readable place label from API (preferred over raw placeId in UI). */
  locationName?: string;
  latitude?: number;
  longitude?: number;
};

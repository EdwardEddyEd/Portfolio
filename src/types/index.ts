export interface IMetaHead {
    title: string;
    description: string;
    ogImageUrl: string;
};

export interface IHeroProps {
    name: string;
    jobDescription: string;
    about: string;
};

export interface ISectionProps {
    title: string;
}

export interface ISkillProps {
    type: "Language" | "Framework" | "Tool";
    title: string; 
    imageUrl: string;
    hoverImageUrl: string;
};

export interface ISkillListProps {
    types: string[];
    listTitle: string;
    skills: ISkillProps[];
};

export interface IExperienceProps {
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    siteUrl: string;
};

export interface IExperienceListProps {
    experiences: IExperienceProps[];
}

export interface IProjectProps {
    title: string;
    thumbnail: string;
    techTags: string[];
    shortDescription: string;
    longDescription: string[];
    githubLink: string;
    liveLink: string;
};

export interface IProjectListProps {
    projects: IProjectProps[];
}

export interface IEducationProps {
    institution: string;
    location: string;
    startYear: string;
    endYear: string;
    degree: string;
    siteUrl: string;
};

export interface IEducationListProps {
    educations: IEducationProps[];
}

export interface ISocialProps {
    name: string;
    url: string;
    imageUrl: string;
}

export interface IIconProps {
    url: string;
    hoverUrl: string;
    altTag: string;
    width: string;
    height: string;
}
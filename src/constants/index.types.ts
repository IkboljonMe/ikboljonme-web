export type NavLink = {
  id: string;
  title: string;
};
export type Service = {
  title: string;
  icon: string;
};
export type Technology = {
  name: string;
  icon: string;
};
export type Experience = {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
};
export type Testimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};
export type Tag = {
  name: string;
  color: string;
};
export type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: any;
  source_code_link: string;
};

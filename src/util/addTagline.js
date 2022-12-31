import profile from "../profile";

function addTagline() {
  return profile.tagline ? ` - ${profile.tagline}` : "";
}

export default addTagline;

import ProfileForm from "./profile-form";
import classes from "./profile.module.css";

function UserProfile() {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;

export const Profile = ({
  firstName,
  lastName,
  username,
  gender,
}: {
  firstName: string;
  lastName: string;
  username: string;
  gender: "male" | "female";
}) => {
  return (
    <>
      <meta property="profile:first_name" content={firstName} />
      <meta property="profile:last_name" content={lastName} />
      <meta property="profile:username" content={username} />
      <meta property="profile:gender" content={gender} />
    </>
  );
};

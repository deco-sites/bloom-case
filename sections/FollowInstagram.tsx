import { ImageWidget } from 'apps/admin/widgets.ts';

interface InstagramProfile {
  username: string;
  profilePicture: ImageWidget;
  /**
   * @description Short bio or description
   * @format textarea
   */
  bio?: string;
  followers?: number;
  posts?: number;
}

interface Props {
  /**
   * @description Title for the Instagram grid section
   * @format rich-text
   */
  title?: string;
  /**
   * @description List of Instagram profiles to display
   */
  profiles: InstagramProfile[];
  /**
   * @description Number of columns in the grid
   */
  columns?: 2 | 3 | 4;
  /**
   * @description Background color of the section
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description Text color for the section
   * @format color-input
   */
  textColor?: string;
  /**
   * @description Show follower count
   */
  showFollowers?: boolean;
  /**
   * @description Show post count
   */
  showPosts?: boolean;
}

export default function InstagramGrid({
  title = "Follow Us on Instagram",
  profiles = [
    {
      username: "user1",
      profilePicture: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      bio: "Fashion enthusiast and trendsetter",
      followers: 10000,
      posts: 500
    },
    {
      username: "user2",
      profilePicture: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      bio: "Travel photographer and adventurer",
      followers: 15000,
      posts: 750
    },
    {
      username: "user3",
      profilePicture: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      bio: "Foodie and home chef",
      followers: 8000,
      posts: 300
    }
  ],
  columns = 3,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  showFollowers = true,
  showPosts = true
}: Props) {
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div class="py-12 px-4 flex-wrap md:gap-5 flex items-start justify-start md:justify-center gap-5 w-[90%] mx-auto max-w-[1300px]">
        <p class="text-3xl font-bold text-left mb-8 text-white w-[250px] pt-2 border-l-2 border-white pl-4">Nos siga no <br></br>Instagram!</p>
        <div class={`max-w-[400px]`}>
          {profiles.map((profile) => (
            <div key={profile.username} class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={profile.profilePicture}
                alt={`${profile.username}'s profile picture`}
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg mb-2">@{profile.username}</h3>
                {profile.bio && <p class="text-sm mb-4">{profile.bio}</p>}
                {(showFollowers || showPosts) && (
                  <div class="flex justify-between mb-4 text-sm text-gray-600">
                    {showFollowers && <span>{profile.followers?.toLocaleString()} followers</span>}
                    {showPosts && <span>{profile.posts} posts</span>}
                  </div>
                )}
                <a
                  href={`https://www.instagram.com/${profile.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm w-full"
                >
                  Follow
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
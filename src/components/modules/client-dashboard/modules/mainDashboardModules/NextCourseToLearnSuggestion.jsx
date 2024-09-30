"use client";

function NextCourseToLearnSuggestion({
  userLevel: { isStarter, isMidLevel, isSenior, isBootcamp },
  courses,
  userProfile,
}) {
  return (
    <div className="flex flex-col w-full justify-between items-center mt-2">
      {isBootcamp && (
        <p className="font-regular w-full text-right px-2">
          {userProfile.fullName} عزیز، شما دانشجو بوت کمپ فرانت اند هستید، نیازی
          به تهیه سایر دوره ها ندارید ✌
        </p>
      )}
    </div>
  );
}

export default NextCourseToLearnSuggestion;

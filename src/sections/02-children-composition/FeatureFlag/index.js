export const FeatureFlag = ({ children = null, name, fallback = null }) => {
    const featureFlags = useFeatureFlags();

    if (!(name in featureFlags)) {
        console.warn(
            `Unknown feature flag name is specified: "${name}". Make sure it exists.`,
        );
    }

    if (featureFlags[name]) {
        return children;
    }

    if (fallback && !featureFlags[name]) {
        return fallback;
    }

    return null;
};

function useFeatureFlags() {
    return {
        passport: true,
    }
}
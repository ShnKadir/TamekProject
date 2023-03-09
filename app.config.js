export default ({ config }) => ({
    ...config,
    API_URL: process.env.API_URL || null,
    extra: {
        eas: {
            projectId: "e6c3d294-597e-40ae-8ed1-881f75bd50c7",
        },
    },
})

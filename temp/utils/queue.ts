export const submissionQueue = {
    add: async (name: string, data: any, options: any) => {
        console.log(`[Mock Queue] Adding job ${name}:`, data);
        return { id: "mock-job-id" };
    }
};


const requestPostsManifest = async (): Promise<any> => {
    try {
        const response = await fetch("/posts/posts.json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (e){
        return {};
    }
};

export default requestPostsManifest;
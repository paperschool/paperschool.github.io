
const requestPost = async ({ postNumber }: { postNumber: number }): Promise<any> => {
    try {
        const response = await fetch(`/posts/${postNumber}/index.json`, {
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

export default requestPost;
const requestPost = async ({ postIndex }: { postIndex: number }): Promise<any> => {
    try {
        const response = await fetch(`/posts/${postIndex}/index.json`, {
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
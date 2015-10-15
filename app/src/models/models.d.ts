declare module models {
    interface IPost {
        title: string,
        author: string,
        url: string,
        id: string
    }
}

declare module contexts {
    interface IReadVCContext {
        post: models.IPost
    }
}



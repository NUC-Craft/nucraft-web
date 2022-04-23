import router from "@/router";

export function navigate(url) {
    if (url.startsWith('/')) {
        router.push({path: url})
            .then()
    } else {
        window.location.href = url
    }
}
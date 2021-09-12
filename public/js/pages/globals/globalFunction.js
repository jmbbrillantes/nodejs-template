const post = (url, params) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(params),
            success: (result) => resolve(result),
            error: (jqXHR, textStatus, errorThrown) => reject(jqXHR.responseText)
        })
    })
}

const get = (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: "get",
            success: (result) => resolve(result),
            error: (jqXHR, textStatus, errorThrown) => reject(jqXHR.responseText)
        })
    })
}
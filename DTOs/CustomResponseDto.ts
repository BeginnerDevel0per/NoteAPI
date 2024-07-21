export default class CustomResponseDto<T> {

    Message?: string;
    Content?: T;

    constructor(model?: T, message?: string,) {
        this.Message = message;
        this.Content = model;
    }

    Fail() {
        return new CustomResponseDto(this.Message ? this.Message : "fail");
    }

    Success() {
        return new CustomResponseDto(this.Content, this.Message ? this.Message : "success");
    }

    SuccessNoModel() {
        return new CustomResponseDto(this.Content, this.Message ? this.Message : "success");
    }
}
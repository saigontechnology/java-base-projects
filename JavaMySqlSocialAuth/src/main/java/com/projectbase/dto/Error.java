package com.projectbase.dto;

import lombok.Data;

@Data
public class Error{

    private String status;

    private String title;

    private String detail;

    public Error(String message) {
        this.status = ErrorCodes.valueOf(message).getStatus();
        this.title = ErrorCodes.valueOf(message).getTitle();
        this.detail = ErrorCodes.valueOf(message).getDetail();
    }
}

package br.org.studio.rest;

import com.google.gson.Gson;

public class Response {

	private String data;

	public String getData() {
		return data;
	}

	public void setData(Object data) {
		Gson gson = new Gson();
		this.data = gson.toJson(data);
	}
	
	public String toJson() {
		Gson gson = new Gson();
		return gson.toJson(this);
	}

}
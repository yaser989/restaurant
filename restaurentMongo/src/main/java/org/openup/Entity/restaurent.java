package org.openup.Entity;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "things")
public class restaurent {

	@Field(value = "_id")
	private String id;
	@Field(value = "name")
	private String name;
	@Field(value = "type")
	private String type;
	@Field(value = "CP")
	private String CP;
	@Field(value = "adresse")
	private String adresse;
	@Field(value = "latitude")
	private double latitude;
	@Field(value = "longitude")
	private double longitude;
	@Field(value = "telephone")
	private String telephone;
	@Field(value = "prix")
	private String prix;
	@Field(value = "specialite1")
	private String specialite1;
	@Field(value = "specialite2")
	private String specialite2;
	@Field(value = "specialite3")
	private String specialite3;
	public restaurent() {
		super();
		// TODO Auto-generated constructor stub
	}
	public restaurent(String id, String name, String type, String cP, String adresse, double latitude, double longitude,
			String telephone, String prix, String specialite1, String specialite2, String specialite3) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		CP = cP;
		this.adresse = adresse;
		this.latitude = latitude;
		this.longitude = longitude;
		this.telephone = telephone;
		this.prix = prix;
		this.specialite1 = specialite1;
		this.specialite2 = specialite2;
		this.specialite3 = specialite3;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCP() {
		return CP;
	}
	public void setCP(String cP) {
		CP = cP;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getPrix() {
		return prix;
	}
	public void setPrix(String prix) {
		this.prix = prix;
	}
	public String getSpecialite1() {
		return specialite1;
	}
	public void setSpecialite1(String specialite1) {
		this.specialite1 = specialite1;
	}
	public String getSpecialite2() {
		return specialite2;
	}
	public void setSpecialite2(String specialite2) {
		this.specialite2 = specialite2;
	}
	public String getSpecialite3() {
		return specialite3;
	}
	public void setSpecialite3(String specialite3) {
		this.specialite3 = specialite3;
	}
	@Override
	public String toString() {
		return "restaurent [id=" + id + ", name=" + name + ", type=" + type + ", CP=" + CP + ", adresse=" + adresse
				+ ", latitude=" + latitude + ", longitude=" + longitude + ", telephone=" + telephone + ", prix=" + prix
				+ ", specialite1=" + specialite1 + ", specialite2=" + specialite2 + ", specialite3=" + specialite3
				+ "]";
	}
	
	
}

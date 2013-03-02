package ie.carrot;

/**
 * Frame for a single measurement transfered from a 'Carrot' to the server.<br>
 * Is expected to be serialised into Json for transfer.<br>
 * 
 * The value for sensorType might be a short form of the sensor types name, like
 * 'MST' for a Moisture sensor.
 * 
 * @author Rene
 * 
 */
public class CarrotData {

	private int carrotId;
	private String sendorType;
	private double sensorValue;
	private long measurementTime;

	public CarrotData(int carrotId, String sendorType, double sensorValue, long measurementTime) {
		this.carrotId = carrotId;
		this.sendorType = sendorType;
		this.sensorValue = sensorValue;
		this.measurementTime = measurementTime;
	}

	public int getCarrotId() {
		return carrotId;
	}

	public void setCarrotId(int carrotId) {
		this.carrotId = carrotId;
	}

	public String getSendorType() {
		return sendorType;
	}

	public void setSendorType(String sendorType) {
		this.sendorType = sendorType;
	}

	public double getSensorValue() {
		return sensorValue;
	}

	public void setSensorValue(double sensorValue) {
		this.sensorValue = sensorValue;
	}

	public long getMeasurementTime() {
		return measurementTime;
	}

	public void setMeasurementTime(long measurementTime) {
		this.measurementTime = measurementTime;
	}
}

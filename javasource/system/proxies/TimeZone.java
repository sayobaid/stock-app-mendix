// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

public class TimeZone implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject timeZoneMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "System.TimeZone";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Code("Code"),
		Description("Description"),
		RawOffset("RawOffset");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public TimeZone(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected TimeZone(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject timeZoneMendixObject)
	{
		if (timeZoneMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, timeZoneMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.timeZoneMendixObject = timeZoneMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static system.proxies.TimeZone initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new system.proxies.TimeZone(context, mendixObject);
	}

	public static system.proxies.TimeZone load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return system.proxies.TimeZone.initialize(context, mendixObject);
	}

	public static java.util.List<system.proxies.TimeZone> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> system.proxies.TimeZone.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of Code
	 */
	public final java.lang.String getCode()
	{
		return getCode(getContext());
	}

	/**
	 * @param context
	 * @return value of Code
	 */
	public final java.lang.String getCode(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Code.toString());
	}

	/**
	 * Set value of Code
	 * @param code
	 */
	public final void setCode(java.lang.String code)
	{
		setCode(getContext(), code);
	}

	/**
	 * Set value of Code
	 * @param context
	 * @param code
	 */
	public final void setCode(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String code)
	{
		getMendixObject().setValue(context, MemberNames.Code.toString(), code);
	}

	/**
	 * @return value of Description
	 */
	public final java.lang.String getDescription()
	{
		return getDescription(getContext());
	}

	/**
	 * @param context
	 * @return value of Description
	 */
	public final java.lang.String getDescription(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Description.toString());
	}

	/**
	 * Set value of Description
	 * @param description
	 */
	public final void setDescription(java.lang.String description)
	{
		setDescription(getContext(), description);
	}

	/**
	 * Set value of Description
	 * @param context
	 * @param description
	 */
	public final void setDescription(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String description)
	{
		getMendixObject().setValue(context, MemberNames.Description.toString(), description);
	}

	/**
	 * @return value of RawOffset
	 */
	public final java.lang.Integer getRawOffset()
	{
		return getRawOffset(getContext());
	}

	/**
	 * @param context
	 * @return value of RawOffset
	 */
	public final java.lang.Integer getRawOffset(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.RawOffset.toString());
	}

	/**
	 * Set value of RawOffset
	 * @param rawoffset
	 */
	public final void setRawOffset(java.lang.Integer rawoffset)
	{
		setRawOffset(getContext(), rawoffset);
	}

	/**
	 * Set value of RawOffset
	 * @param context
	 * @param rawoffset
	 */
	public final void setRawOffset(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer rawoffset)
	{
		getMendixObject().setValue(context, MemberNames.RawOffset.toString(), rawoffset);
	}

	@Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return timeZoneMendixObject;
	}

	@Override
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final system.proxies.TimeZone that = (system.proxies.TimeZone) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

  /**
   * Gives full name ("Module.Entity" name) of the type of the entity.
   *
   * @return the name
   */
	public static java.lang.String getType()
	{
		return entityName;
	}
}
